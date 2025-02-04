import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSorting: (value: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectSorting, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Ratings" },
    { value: "name", label: "Name" },
  ];

  const sortingOrder = sortOrders.find((order) => order.value === selectedSort);

  return (
    <Menu>
      <MenuButton>
        <HStack>
          <Text fontWeight="bold">
            Order by: {sortingOrder?.label || "Relevance"}
          </Text>
          <BsChevronDown />
        </HStack>
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            value={sortOrder.value}
            onClick={() => onSelectSorting(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
