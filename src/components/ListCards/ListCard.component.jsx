import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../ItemCard';

const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`;

const ListCard = ({ ...props }) => {
  const { items } = props;
  const [videos, setVideos] = useState(items ? items : []);

  useEffect(() => {
    setVideos(items);
  }, [items]);

  return (
    <div className="">
      <StyledDiv className="mx-5">
        {videos.map((item) => {
          const { id } = item;
          if (['youtube#channel'].includes(id.kind)) return null;
          return <ItemCard item={item} key={item.etag} />;
        })}
      </StyledDiv>
    </div>
  );
};

export default ListCard;
