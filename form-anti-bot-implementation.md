# Form Bot Protection Log

## Steps Taken

- ✅ **Checked form submission** with a simple bot — it worked well.
- 🛠️ **Implemented honeypot:** added an invisible field called `inputForBot` to detect bots. If filled, the form is not submitted.
- ❌ **Tested first bot:** submission failed as expected.
- 🤖 **Created advanced bot** that automatically detects honeypot fields.
- 🔒 **Implemented Cloudflare Turnstile:** successfully blocked advanced bots. Then, honeypot was removed.

## Environment Variables (for Turnstile)

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAACC1SQfZgyM9UMXC
TURNSTILE_SECRET_KEY=0x4AAAAAACC1SVL6AZ3UX8bjAay7kw4B6no
```

## Python Code for the bot

```requirements
pip install playwright
playwright install

```

```python
from playwright.sync_api import sync_playwright
import time
import random


def is_honeypot(element):
    """Detect honeypot fields using multiple heuristics"""
    try:
        attrs = (element.get_attribute("name") or "") + (element.get_attribute("id") or "")
        style = element.get_attribute("style") or ""
        class_name = element.get_attribute("class") or ""

        # Checking if element is set to hiddne in the CSS
        if "hidden" in style or "none" in style or "visibility: hidden" in style:
            return True

        if any(keyword in attrs.lower() for keyword in [
            "honeypot", "hp", "bot", "trap", "extra", "website", "fax", "url"
        ]):
            return True

        # Check bounding box (0 size = invisible)
        box = element.bounding_box()
        if not box or box["width"] == 0 or box["height"] == 0:
            return True

        return False
    except:
        return False


def generate_fake_data(field_name, field_type):
    """Generate realistic fake data based on field name and type"""
    field_name_lower = field_name.lower()

    if "email" in field_name_lower:
        return f"test.user{random.randint(1000, 9999)}@example.com"

    if "firstname" in field_name_lower or field_name_lower == "fname":
        return random.choice(["John", "Jane", "Michael", "Sarah", "David", "Emily"])

    if "lastname" in field_name_lower or field_name_lower == "lname":
        return random.choice(["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"])

    if "company" in field_name_lower or "organization" in field_name_lower:
        return random.choice(["TechCorp Inc", "Digital Solutions", "Innovation Labs", "Global Systems"])

    if "phone" in field_name_lower or "tel" in field_name_lower:
        return f"+1-555-{random.randint(100, 999)}-{random.randint(1000, 9999)}"

    if "comment" in field_name_lower or "message" in field_name_lower or "note" in field_name_lower:
        return "This is a test submission to check form vulnerability and security measures."

    if field_type == "number" or "units" in field_name_lower or "quantity" in field_name_lower:
        return str(random.randint(1, 100))

    return f"Test_{random.randint(100, 999)}"


def fill_field(element, name):
    """Intelligently fill different types of form fields"""
    try:
        tag_name = element.evaluate("el => el.tagName.toLowerCase()")
        field_type = element.get_attribute("type") or "text"

        if tag_name == "select":
            options = element.evaluate("""
                el => Array.from(el.options)
                    .filter(opt => opt.value !== '')
                    .map(opt => opt.value)
            """)
            if options and len(options) > 0:
                # Select a random non-empty option
                element.select_option(random.choice(options))
                print(f"✓ Selected option in dropdown: {name}")
                return True
            else:
                print(f"⚠ Dropdown {name} has no valid options")
                return False

        elif field_type == "checkbox":
            if not element.is_checked():
                element.check()
                print(f"✓ Checked checkbox: {name}")
                return True
            return False

        elif field_type == "radio":
            element.check()
            print(f"✓ Selected radio button: {name}")
            return True

        elif field_type in ["text", "email", "tel", "number", "url"]:
            fake_data = generate_fake_data(name, field_type)
            element.fill(fake_data)
            print(f"✓ Filled {field_type} field '{name}': {fake_data}")
            return True

        elif tag_name == "textarea":
            fake_data = generate_fake_data(name, "textarea")
            element.fill(fake_data)
            print(f"✓ Filled textarea '{name}': {fake_data}")
            return True

        else:
            fake_data = generate_fake_data(name, field_type)
            element.fill(fake_data)
            print(f"✓ Filled field '{name}': {fake_data}")
            return True

    except Exception as e:
        print(f"✗ Could not fill field '{name}': {str(e)}")
        return False


with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)  # Set to False to see the browser
    page = browser.new_page()

    print("\n" + "="*60)
    print("🤖 STARTING FORM VULNERABILITY TEST BOT")
    print("="*60 + "\n")

    page.goto("http://localhost:3000/waitlist")
    print("📄 Navigated to: http://localhost:3000/waitlist\n")

    page.wait_for_load_state("networkidle")
    time.sleep(1)

    inputs = page.query_selector_all("input, textarea, select")
    print(f"📋 Found {len(inputs)} form elements\n")

    filled_count = 0
    skipped_count = 0
    honeypot_count = 0

    for el in inputs:
        name = el.get_attribute("name") or el.get_attribute("id") or "unnamed"

        if is_honeypot(el):
            print(f"🍯 HONEYPOT DETECTED → ignored: {name}")
            honeypot_count += 1
            continue

        if fill_field(el, name):
            filled_count += 1
            time.sleep(0.3)  # Human-like delay
        else:
            skipped_count += 1

    print("\n" + "-"*60)
    print(f"📊 SUMMARY:")
    print(f"   ✓ Fields filled: {filled_count}")
    print(f"   ✗ Fields skipped: {skipped_count}")
    print(f"   🍯 Honeypots detected: {honeypot_count}")
    print("-"*60 + "\n")

    print("🔍 Looking for submit button...\n")

    submit_selectors = [
        "button[type='submit']",
        "input[type='submit']",
        "button:has-text('Submit')",
        "button:has-text('Send')",
        "button:has-text('Join')",
        "button:has-text('Sign up')",
        "button:has-text('Register')",
        ".submit-btn",
        "#submit",
    ]

    submit_button = None
    for selector in submit_selectors:
        try:
            submit_button = page.query_selector(selector)
            if submit_button:
                print(f"✓ Found submit button: {selector}")
                break
        except:
            continue

    if submit_button:
        try:
            print("🚀 Clicking submit button...\n")
            submit_button.click()

            try:
                page.wait_for_load_state("networkidle", timeout=5000)
            except:
                pass

            time.sleep(2)

            # Check for success/error messages
            current_url = page.url
            print(f"📍 Current URL: {current_url}")

            success_selectors = [
                ".success", ".alert-success", ".message-success",
                "*:has-text('Success')", "*:has-text('Thank you')",
                "*:has-text('submitted')"
            ]

            error_selectors = [
                ".error", ".alert-error", ".message-error",
                "*:has-text('Error')", "*:has-text('required')",
                "*:has-text('invalid')"
            ]

            success_found = False
            for selector in success_selectors:
                try:
                    if page.query_selector(selector):
                        print(f"✓ SUCCESS MESSAGE DETECTED!")
                        success_found = True
                        break
                except:
                    pass

            if not success_found:
                for selector in error_selectors:
                    try:
                        error_elem = page.query_selector(selector)
                        if error_elem:
                            error_text = error_elem.text_content()
                            print(f"⚠ ERROR MESSAGE: {error_text}")
                            break
                    except:
                        pass

            # Take screenshot
            screenshot_path = "form_submission_result.png"
            page.screenshot(path=screenshot_path)
            print(f"\n📸 Screenshot saved: {screenshot_path}")

        except Exception as e:
            print(f"✗ Error clicking submit: {str(e)}")
    else:
        print("⚠ No submit button found!")

    print("\n" + "="*60)
    print("🏁 BOT COMPLETED")
    print("="*60 + "\n")

    time.sleep(3)  # Keep browser open to see result
    browser.close()
```
