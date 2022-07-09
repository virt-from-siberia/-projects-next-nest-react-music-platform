import React from "react";
import NavBar from "../compoentns/NavBar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Шлавная</h1>
          <h3>Best tracks</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
