import { View } from "react-native";

import { styles } from "./styles";

import { Input } from "@/components/Input";
import { cpf, numbers, cnpj } from "@/utils/masks";
import { Controller, useForm } from "react-hook-form";

//TODO: ZOD for transformation???

const maskMap = {
  cpfMask: cpf.applyMask,
  cnpjMask: cnpj.applyMask,
};

export function Home() {
  const { control } = useForm();

  const applyMask = (input: string, mask: "cpfMask" | "cnpjMask") => {
    const onlyNumbersValue = numbers.onlyNumbersMask(input);

    return maskMap[mask](onlyNumbersValue);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, value } }) => {
          return (
            <Input.Container>
              <Input.Field
                maxLength={cpf.maxLength}
                placeholder="CPF"
                onChangeText={(text) => onChange(applyMask(text, "cpfMask"))}
                keyboardType="numeric"
                value={value}
              />

              <Input.ClearButton onPress={() => onChange("")} />
            </Input.Container>
          );
        }}
      />
      <Controller
        control={control}
        name="cnpj"
        render={({ field: { onChange, value } }) => {
          return (
            <Input.Container>
              <Input.Field
                maxLength={cpf.maxLength}
                placeholder="CNPJ"
                onChangeText={(text) => onChange(applyMask(text, "cnpjMask"))}
                keyboardType="numeric"
                value={value}
              />

              <Input.ClearButton onPress={() => onChange("")} />
            </Input.Container>
          );
        }}
      />
    </View>
  );
}
