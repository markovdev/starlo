import React, { useState, useEffect } from "react";
import Input from "../components/UI/Input/Input";

import Room from "../components/Room/Room";
import useHttp from "../hooks/http";
import Grid from "../components/Containers/Layout/Grid";
import Message from "../components/UI/Message/Message";
import Section from "../components/Section/Section";
import Container from "../components/Containers/Container";
import Form from "../components/UI/Form/Form";
import { API_URL } from "../config";

const Search = () => {
  const { sendRequest, data, error, status } = useHttp();
  const [curPage, setCurPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [sortBy, setSortBy] = useState("-createdAt");
  const [filterByPrice, setFilterByPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState("-price");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    const filter = `&filter=${filterByPrice}`;
    const url = `${API_URL}/rooms?page=${curPage}&limit=${limit}${
      sortBy || sortByPrice ? "&sort=" + sortBy + "," + sortByPrice : null
    }${filterByPrice ? "&price[gt]=" + filterByPrice : ""}`;
    sendRequest(url, "GET", true);
  }, [sortBy, filterBy, filterByPrice, curPage]);

  return (
    <Section className="section--search">
      {error && <Message text={error.response.data.message} error />}
      <Container>
        <Form className="search-page u-margin-bottom-big">
          <div className="u-flex u-flex--center">
            <Input
              type="select"
              onChange={(e) => setSortBy(e.target.value)}
              options={[
                { label: "Sort by date", value: "-createdAt" },
                { label: "Sort by name", value: "name" },
              ]}
            />{" "}
            <Input
              type="select"
              onChange={(e) => setFilterByPrice(e.target.value)}
              options={[
                {
                  label: "Filter by price:",
                },
                { label: "+100$", value: "100" },
                { label: "+200$", value: "200" },
                { label: "+300$", value: "300" },
                { label: "+400$", value: "400" },
                { label: "+500$", value: "500" },
              ]}
            />{" "}
            <Input
              type="select"
              onChange={(e) => setSortByPrice(e.target.value)}
              options={[
                { label: "Lowest", value: "-price" },
                { label: "Highest", value: "price" },
              ]}
            />{" "}
          </div>
          <Input
            placeholder="Search..."
            className="search-page__input"
            disableVald
          />
        </Form>

        <Grid col="3">
          {data?.data.docs.map((room) => (
            <Room
              cover={room.cover}
              slug={room.slug}
              name={room.name}
              beds={room.bedsCount}
              extraBeds={room.extraBeds}
              meals={room.meals}
              date={room.createdAt}
              isOccupied={room.isOccupied}
              ratingsAverage={room.ratingsAverage}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Search;
