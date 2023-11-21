import List from "@mui/material/List";
import ListItem from "../ListItem";
import database from "../../data/mock";
import { Container, Grid } from "@mui/material";

function ListTransactions() {
  const income = database.transactions.filter((i) => i.type === "income");
  const outcome = database.transactions.filter((i) => i.type === "outcome");

  return (
    <Container maxWidth="md">
      <Grid container paddingY={2} spacing={2}>
        <Grid item xs={6}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {income.map((i) => (
              <ListItem
                createdAt={i.createdAt}
                description={i.description}
                type={i.type}
                value={i.value}
              />
            ))}
          </List>
        </Grid>

        <Grid item xs={6}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {outcome.map((i) => (
              <ListItem
                createdAt={i.createdAt}
                description={i.description}
                type={i.type}
                value={i.value}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListTransactions;
