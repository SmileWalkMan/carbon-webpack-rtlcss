import React from "react";
import { ComboBox, Checkbox, MultiSelect } from "carbon-components-react";

const items = [
  {
    id: "option-0",
    text:
      "An example option that is really long to show what should be done to handle long text"
  },
  {
    id: "option-1",
    text: "Option 1"
  },
  {
    id: "option-2",
    text: "Option 2"
  },
  {
    id: "option-3",
    text: "Option 3",
    selected: true
  },
  {
    id: "option-4",
    text: "Option 4"
  },
  {
    id: "option-5",
    text: "Option 5"
  }
];

export const combobox = () => (
  <div style={{ width: 300 }}>
    <ComboBox
      items={items}
      itemToString={(item) => (item ? item.text : "")}
      placeholder="Filter..."
      titleText="ComboBox title"
      helperText="Combobox helper text"
    />
  </div>
);

export const disabled = () => (
  <div style={{ width: 300 }}>
    <ComboBox
      disabled
      items={items}
      itemToString={(item) => (item ? item.text : "")}
      placeholder="Filter..."
      titleText="ComboBox title"
      helperText="Combobox helper text"
    />
  </div>
);

export const light = () => (
  <div style={{ width: 300 }}>
    <ComboBox
      light
      items={items}
      itemToString={(item) => (item ? item.text : "")}
      placeholder="Filter..."
      titleText="ComboBox title"
      helperText="Combobox helper text"
    />
  </div>
);
export default function Root() {
  return (
    <div dir="rtl">
      <div>
        <h1>Carbon Check</h1>
      </div>
      <Checkbox labelText={`Checkbox 1`} id="checkbox-1" />
      <Checkbox labelText={`Checkbox 2`} id="checkbox-2" />
      <ComboBox
        light
        items={items}
        itemToString={(item) => (item ? item.text : "")}
        placeholder="Filter..."
        titleText="ComboBox title"
        helperText="Combobox helper text"
      />
      <div style={{ width: 300 }}>
        <MultiSelect
          items={items}
          itemToString={(item) => (item ? item.text : "")}
        />
      </div>
    </div>
  );
}
//abc
