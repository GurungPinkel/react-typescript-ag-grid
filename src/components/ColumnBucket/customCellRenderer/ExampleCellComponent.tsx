import React, { Component } from "react";

interface ExampleCellProps {
  value?: string;
}

interface ExampleCellState {
  value?: string;
}

export default class ExampleCell extends Component<
  ExampleCellProps,
  ExampleCellState
> {
  constructor(props: ExampleCellProps) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      <div>
        <span>
          <p>
            <span>{this.state.value}</span>
          </p>
        </span>
      </div>
    );
  }
}

// export class ExampleCell extends React.Component<
//   ICellRendererParams,
//   RendererState
// > {}

// export const ExampleCell = (props: ExampleCellProps): JSX.Element => {
//   const { value } = props;
//   return (
//     <div>
//       <span>{value}</span>
//     </div>
//   );
// };
