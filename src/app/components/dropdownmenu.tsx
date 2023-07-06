import React, { useState } from 'react';
import { MenuDropdownButton, DropdownList, DropdownItem } from '../stylescomponents/styles';
import IconBxsDownArrow from './icons/IconBxsDownArrow';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <MenuDropdownButton onClick={handleToggleDropdown}>Menu<IconBxsDownArrow /></MenuDropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownItem>Opção 1</DropdownItem>
          <DropdownItem>Opção 2</DropdownItem>
          <DropdownItem>Opção 3</DropdownItem>
        </DropdownList>
      )}
    </div>
  );
};

export default DropdownMenu;
