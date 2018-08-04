import * as React from 'react';

interface IProps {
  branding: string;
}

const Header = (props: IProps) => {
  const { branding } = props;

  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;
