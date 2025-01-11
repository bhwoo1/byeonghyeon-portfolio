import React from "react";

function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <div>{modal}</div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
