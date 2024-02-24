import { PropsWithChildren, ReactNode } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const InputContainer = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const InputField = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.field}
      placeholderTextColor="#7f7f85"
      selectionColor="#8234E9"
      {...props}
    />
  );
};

const InputClearButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <Feather name="x" size={24} color="#999" />
    </TouchableOpacity>
  );
};

export const Input = {
  Container: InputContainer,
  Field: InputField,
  ClearButton: InputClearButton,
};
