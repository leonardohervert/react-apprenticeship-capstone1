import React from 'react';
import { Card, CardImg, CardBody, CardHeader } from 'reactstrap';
import styled from 'styled-components';
import Label from '../Label';

const StyledCard = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

const StdTittle = styled(Label)`
  font-size: 14px;
`;

const StdDescription = styled(Label)`
  font-size: 10px;
`;

const ItemCard = ({ ...props }) => {
  const { item } = props;
  const { snippet } = item;
  const { thumbnails } = snippet;
  return (
    <StyledCard>
      <Card>
        <CardHeader className="p-0">
          <CardImg
            alt="Card image cap"
            src={thumbnails.medium.url}
            top
            width="100%"
          />
        </CardHeader>
        <CardBody className="p-0">
          <StdTittle className="fx-4">{snippet.title}</StdTittle>
          <StdDescription className="">{snippet.description}</StdDescription>
        </CardBody>
      </Card>
    </StyledCard>
  );
};

export default ItemCard;
