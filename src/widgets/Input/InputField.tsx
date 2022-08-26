import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
interface Props {
  schema: Partial<any>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<Props> = ({ schema, value, onChange }) => {
  return (
    <Box>
      <FormLabel className="form__label">{schema.name}</FormLabel>
      <Input
        autoComplete="off"
        placeholder={schema.name}
        value={value || ""}
        name={schema.field}
        onChange={onChange}
        type={schema.type}
      />
    </Box>
  );
};
export default InputField;
