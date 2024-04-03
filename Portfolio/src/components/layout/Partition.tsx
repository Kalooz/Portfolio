import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface PartitionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rows?: number;
  cols?: number;
}

const Partition: FC<PartitionProps> = ({
  children,
  className,
  rows,
  cols,
  ...props
}) => {
  const partitionClass = classNames(
    "container bg-dark-gray rounded-3xl p-6",
    className,
    {
      [`row-span-${rows}`]: rows != undefined,
    },
    {
      [`col-span-${cols}`]: cols != undefined,
    }
  );

  return (
    <div className={partitionClass} {...props}>
      {children}
    </div>
  );
};

export default Partition;
