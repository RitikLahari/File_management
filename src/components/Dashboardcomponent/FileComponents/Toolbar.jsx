import React from 'react';
import styled from '@emotion/styled';
import { 
  FaBold, FaItalic, FaUnderline, FaStrikethrough, 
  FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify,
  FaListUl, FaListOl, FaSuperscript, FaSubscript
} from 'react-icons/fa';

const ToolbarContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  flex-wrap: wrap;
`;

const ToolbarGroup = styled.div`
  display: flex;
  gap: 4px;
  padding: 0 8px;
  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;

const Button = styled.button`
  padding: 4px 8px;
  background: ${props => props.active ? '#e0e0e0' : 'transparent'};
  border: 1px solid ${props => props.active ? '#bbb' : 'transparent'};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    background: #e0e0e0;
  }
`;

const Select = styled.select`
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
`;

const FontSizeInput = styled.input`
  width: 50px;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Toolbar = ({ 
  formatOptions, 
  setFormatOptions, 
  fontSize, 
  setFontSize,
  fontFamily,
  setFontFamily
}) => {
  const fonts = [
    'Arial',
    'Calibri',
    'Times New Roman',
    'Courier New',
    'Georgia',
    'Verdana'
  ];

  return (
    <ToolbarContainer>
      <ToolbarGroup>
        <Select 
          value={fontFamily} 
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fonts.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </Select>
        <FontSizeInput
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          min="8"
          max="72"
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <Button
          active={formatOptions.bold}
          onClick={() => setFormatOptions(prev => ({ ...prev, bold: !prev.bold }))}
        >
          <FaBold />
        </Button>
        <Button
          active={formatOptions.italic}
          onClick={() => setFormatOptions(prev => ({ ...prev, italic: !prev.italic }))}
        >
          <FaItalic />
        </Button>
        <Button
          active={formatOptions.underline}
          onClick={() => setFormatOptions(prev => ({ ...prev, underline: !prev.underline }))}
        >
          <FaUnderline />
        </Button>
        <Button
          active={formatOptions.strikethrough}
          onClick={() => setFormatOptions(prev => ({ ...prev, strikethrough: !prev.strikethrough }))}
        >
          <FaStrikethrough />
        </Button>
      </ToolbarGroup>

      <ToolbarGroup>
        <Button
          active={formatOptions.align === 'left'}
          onClick={() => setFormatOptions(prev => ({ ...prev, align: 'left' }))}
        >
          <FaAlignLeft />
        </Button>
        <Button
          active={formatOptions.align === 'center'}
          onClick={() => setFormatOptions(prev => ({ ...prev, align: 'center' }))}
        >
          <FaAlignCenter />
        </Button>
        <Button
          active={formatOptions.align === 'right'}
          onClick={() => setFormatOptions(prev => ({ ...prev, align: 'right' }))}
        >
          <FaAlignRight />
        </Button>
        <Button
          active={formatOptions.align === 'justify'}
          onClick={() => setFormatOptions(prev => ({ ...prev, align: 'justify' }))}
        >
          <FaAlignJustify />
        </Button>
      </ToolbarGroup>

      <ToolbarGroup>
        <Button
          active={formatOptions.list === 'bullet'}
          onClick={() => setFormatOptions(prev => ({ ...prev, list: prev.list === 'bullet' ? null : 'bullet' }))}
        >
          <FaListUl />
        </Button>
        <Button
          active={formatOptions.list === 'numbered'}
          onClick={() => setFormatOptions(prev => ({ ...prev, list: prev.list === 'numbered' ? null : 'numbered' }))}
        >
          <FaListOl />
        </Button>
      </ToolbarGroup>

      <ToolbarGroup>
        <Button
          active={formatOptions.script === 'super'}
          onClick={() => setFormatOptions(prev => ({ ...prev, script: prev.script === 'super' ? null : 'super' }))}
        >
          <FaSuperscript />
        </Button>
        <Button
          active={formatOptions.script === 'sub'}
          onClick={() => setFormatOptions(prev => ({ ...prev, script: prev.script === 'sub' ? null : 'sub' }))}
        >
          <FaSubscript />
        </Button>
      </ToolbarGroup>
    </ToolbarContainer>
  );
};

export default Toolbar;