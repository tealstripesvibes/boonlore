import React, { useState, useEffect } from "react";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "checkbox"; // Supported field types
  required?: boolean; // Optional, specifies whether the field is required
  placeholder?: string; // Optional, placeholder text for the field
  defaultValue?: any; // Optional, default value for the field
};

export type FormConfig = {
  title?: string;
  formId: string;
  fields: FieldConfig[];
};

// Props for FormWidget
type FormWidgetProps = {
  config: FormConfig;
  onSubmit: (data: any) => void;
  onChange: (data: any, isValid: boolean) => void;
};

export function FormWidget({ config, onSubmit, onChange }: FormWidgetProps) {
  const [formData, setFormData] = useState<any>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    validateForm(formData);
    onChange(formData, isValid);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const validateForm = (data: any) => {
    const isValid = config.fields.every(
      (field: any) => !field.required || data[field.name],
    );
    setIsValid(isValid);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.fields.map((field: any) => {
        const id = `${config.formId}--${field.name}`;
        return (
          <fieldset key={field.name}>
            <label htmlFor={id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                placeholder={field.placeholder || ""}
                value={formData[field.name] || ""}
                required={field.required}
                onChange={handleChange}
              ></textarea>
            ) : (
              <input
                id={id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder || ""}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required}
              />
            )}
          </fieldset>
        );
      })}
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
