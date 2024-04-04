import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({
  title,

  children,
  className,
  ...props
}) => {
  const SectionClass = classNames(className);

  return (
    <div
      className={SectionClass}
      {...props}
      id={title.toLowerCase().replace(" ", "-")}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
