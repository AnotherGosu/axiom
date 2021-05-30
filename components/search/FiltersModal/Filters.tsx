import { Flex, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import Article from "./Article";
import RangeInput from "./RangeInput";
import CheckBoxMenu from "./CheckBoxMenu";

const options = [
  { value: "", title: "Раздельные" },
  { value: "", title: "Смежно-раздельные" },
  { value: "", title: "Проходные" },
  { value: "", title: "Свободная планировка" },
];

const squareIcon = (
  <span>
    м<sup>2</sup>
  </span>
);

const Filters: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      gridGap="50px"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex flexDir="column" gridRowGap="50px">
        <Article title="Площадь">
          <RangeInput
            minInputRightChildren={squareIcon}
            maxInputRightChildren={squareIcon}
            minInputId="min-common-square"
            maxInputId="max-common-square"
          />
        </Article>
        <Article title="Площадь кухни">
          <RangeInput
            minInputRightChildren={squareIcon}
            maxInputRightChildren={squareIcon}
            minInputId="min-kitchen-square"
            maxInputId="max-kitchen-square"
          />
        </Article>
        <Article title="Этаж">
          <RangeInput minInputId="min-floor" maxInputId="max-floor" />
          <CheckboxGroup colorScheme="green">
            <Flex gridGap="25px" mt="10px">
              <Checkbox value="">Не первый</Checkbox>
              <Checkbox value="">Не последний</Checkbox>
            </Flex>
          </CheckboxGroup>
        </Article>
        <Article title="Параметры квартиры">
          <Flex wrap="wrap" gridGap="20px">
            <CheckBoxMenu title="Комнаты" options={options} />
            <CheckBoxMenu title="Состояние" options={options} />
            <CheckBoxMenu title="Балкон" options={options} />
            <CheckBoxMenu title="Санузел" options={options} />
            <CheckBoxMenu title="Плита" options={options} />
          </Flex>
        </Article>
      </Flex>
      <Flex flexDir="column" gridRowGap="50px">
        <Article title="Год постройки">
          <RangeInput
            minInputRightChildren="г."
            maxInputRightChildren="г."
            minInputId="min-built-year"
            maxInputId="max-built-year"
          />
        </Article>
        <Article title="Параметры дома">
          <Flex wrap="wrap" gridGap="20px">
            <CheckBoxMenu title="Тип недвижимости" options={options} />
            <CheckBoxMenu title="Стены" options={options} />
            <CheckBoxMenu title="Парковка" options={options} />
          </Flex>
        </Article>
      </Flex>
    </Flex>
  );
};

export default Filters;
