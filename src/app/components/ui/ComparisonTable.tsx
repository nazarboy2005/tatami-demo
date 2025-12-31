import React from "react";
import { Container } from "./Container";

interface ComparisonItem {
  feature: string;
  traditional: React.ReactNode;
  tatami: React.ReactNode;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  items: ComparisonItem[];
  backgroundColor?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  description,
  items,
  backgroundColor = "white",
}) => {
  return (
    <section className="py-16" style={{ backgroundColor }}>
      <Container>
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-4 font-heading">
            {title}
          </h2>
        )}

        {description && (
          <p className="text-center text-[#617268] max-w-3xl mx-auto mb-12">
            {description}
          </p>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-50 text-left text-[#617268] font-bold border-b border-gray-200">
                  Feature
                </th>
                <th className="py-4 px-6 bg-gray-50 text-left text-[#617268] font-bold border-b border-gray-200">
                  Traditional Method
                </th>
                <th className="py-4 px-6 bg-[#d2fce3] text-left text-[#025356] font-bold border-b border-gray-200">
                  Tatami Platform
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-6 border-b border-gray-200 font-medium">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {typeof item.traditional === "string" ? (
                      <span className="text-[#617268]">{item.traditional}</span>
                    ) : (
                      item.traditional
                    )}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 bg-[#d2fce3]/10">
                    {typeof item.tatami === "string" ? (
                      <span className="text-[#025356] font-medium">
                        {item.tatami}
                      </span>
                    ) : (
                      item.tatami
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
