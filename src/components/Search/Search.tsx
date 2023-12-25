import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { searchValueState } from '../../atom';
import { useRecoilState } from 'recoil';
import {useState} from "react";

export function Search(props: TextInputProps) {
  const theme = useMantineTheme();
const [searchValue, setSearchValue] = useRecoilState(searchValueState);
const [inputValue, setInputValue] = useState("");
  return (
    <TextInput
        onChange={(event) => {if((event.target.value)) {setInputValue(event.target.value)} else {setSearchValue(event.target.value)}}}
      radius="xl"
      size="md"
      placeholder="Geometry Id"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <ActionIcon onClick={() => setSearchValue(inputValue)}
            size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}