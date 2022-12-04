import './App.css';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link, List, ListItem, Box, Avatar } from '@mui/material';
import footer from './mockData/footer';
import latestNews from './mockData/latestNews';
import popularNews from './mockData/popularNews';
import tag from './mockData/tag';
import banners from './mockData/banner';
import newsHot from './mockData/newsHot';

function App() {
  return (
    <div className="App">

      <Grid container className="container">
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>
            <Grid container className="header">
              <Grid item xs={4} />
              <Grid item xs={4}>
                <Grid container className="header__container">
                  <Grid item xs={12}>
                    <Typography variant="h4" className="header__logo">NAL MEDIA</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p" className="header__title" >ベトナムオフショア開発にまつわる情報を提供します</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs />
            </Grid>

            <Grid container className="nav" sx={{ display: "flex" }}>
              <Grid item xs className="nav__menu--flex" sx={{ margin: "auto" }}>
                <Link className="nav__menu--list" sx={{ textDecoration: 'none' }}>オフショア開発</Link>
              </Grid>
              <Grid item xs className="nav__menu--flex" sx={{ margin: "auto" }}>
                <Link className="nav__menu--list" sx={{ textDecoration: 'none' }}>NALブログ</Link>
              </Grid>
              <Grid item xs className="nav__menu--flex" sx={{ margin: "auto" }}>
                <Link className="nav__menu--list" sx={{ textDecoration: 'none' }}>ベトナム情報</Link>
              </Grid>
              <Grid item xs className="nav__menu--flex" sx={{ margin: "auto" }}>
                <Link className="nav__menu--list" sx={{ textDecoration: 'none' }}>お問い合わせ</Link>
              </Grid>
            </Grid>

            <Grid container className="body">
              <Grid item xs={12} className="news-hot">
                <Grid container sx={{ display: "flex" }}>
                  <Grid item xs={7} sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                    <img src="images/1.jpg" className="news-hot__hot" style={{ position: "relative" }} />
                    <div style={{ position: "absolute", bottom: 0, padding: 5, width: "400px", }}>
                      <Link href="https://media.nal.vn/nal-sra" sx={{ backgroundColor: "red", color: "white", textDecoration: "none" }}>{newsHot[0].category_name}</Link>
                      <div style={{ backgroundColor: "white" }}>
                        <Typography component="h6">{newsHot[0].title}</Typography>
                        <Typography component="p" sx={{ color: "#7d7d7d" }}> &nbsp; {newsHot[0].content}...</Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs id="news-hot__top-viewed">
                    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                      <Grid item xs sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                        <img src="images/2.jpg" className="news-hot__TOP-VIEWED" style={{ position: "relative" }} />
                        <div style={{ position: "absolute", bottom: 0, padding: 5, width: "400px", }}>
                          <Link sx={{ backgroundColor: "red", color: "white", textDecoration: "none" }}>{newsHot[1].category_name}</Link>
                          <div style={{ backgroundColor: "white" }}>
                            <Typography component="h6">{newsHot[0].title}</Typography>
                            <Typography component="p" sx={{ color: "#7d7d7d" }}> &nbsp; {newsHot[1].content}...</Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                        <img src="images/3.jpg" className="news-hot__TOP-VIEWED" style={{ position: "relative" }} />
                        <div style={{ position: "absolute", bottom: 0, padding: 5, width: "400px", }}>
                          <Link sx={{ backgroundColor: "red", color: "white", textDecoration: "none" }}>{newsHot[2].category_name}</Link>
                          <div style={{ backgroundColor: "white" }}>
                            <Typography component="h6">{newsHot[0].title}</Typography>
                            <Typography component="p" sx={{ color: "#7d7d7d" }}> &nbsp; {newsHot[2].content}...</Typography>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>


              </Grid>

              <Grid item xs={8} className="latest-news" sx={{ paddingTop: "10px" }}>
                <Typography variant="h6" sx={{ marginBottom: "5px" }}>Latest News</Typography>
                <List>
                  {
                    latestNews.map((item) => (
                      <ListItem sx={{ paddingLeft: 0, maxHeight: "157px", marginTop: "20px" }} key={item.id}>
                        <Grid container>
                          <Grid item xs={4}>
                            <img src={`images/${item.image}.jpg`} className="latest-news__image" />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="p" sx={{ color: "white", backgroundColor: "black", fontSize: "11.5px", border: "1px solid black" }}>{item.category_name}</Typography>
                            <br />
                            <Typography variant="p" className="latest-news__text" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                            <br />
                            <Typography variant="p" className="latest-news__text">{item.date}, by {item.author}</Typography>
                            <br />
                            <Typography variant="p" className="latest-news__text">{item.content}</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    ))}
                </List>
              </Grid>

              <Grid item xs className="popular-news" sx={{ marginTop: "10px" }}>
                <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                  <Grid item lg>
                    <Typography variant="h6">Popular News</Typography>
                    <List>
                      {
                        popularNews.map((item) => (
                          <ListItem sx={{ padding: 0, height: "120px" }} key={item.id}>
                            <Grid container spacing={1}>
                              <Grid item lg={4}>
                                <img src={`images/${item.image}.jpg`} />
                              </Grid>
                              <Grid item lg>
                                <Typography variant="p" sx={{ color: "white", border: "1px solid black", backgroundColor: "black" }}>{item.category_name}</Typography>
                                <br />
                                <Typography variant="p" color="initial">{item.title}</Typography>
                              </Grid>
                            </Grid>
                          </ListItem>
                        ))}
                    </List>
                  </Grid>

                  <Grid item lg>
                    <Typography variant="h6">Tags</Typography>
                    <List>
                      {
                        tag.map((item, index) => (
                          <ListItem key={index} >
                            <Avatar src="icons/tag-svgrepo-com.svg" sx={{ width: "10px", height: "10px" }} />
                            <Typography variant="p" sx={{ color: "#7d7d7d" }}> &nbsp; {item.tag} (<strong style={{ color: "black" }}>{item.posts}</strong> Posts)</Typography>
                          </ListItem>
                        ))
                      }
                    </List>
                  </Grid>

                  <Grid item lg>
                    <List>
                      {
                        banners.map((item) => (
                          <ListItem key={item.id}>
                            <img src={`images/${item.image}`} style={{ width: "256px" }} />
                          </ListItem>
                        ))
                      }
                    </List>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

            <Grid container className="footer" sx={{ borderTop: "1px solid", height: "48px", marginTop: "20px" }}>
              <Grid item lg={6}>
                <img alt="NAL logo" src="images/logo-NAL.jpg" />
              </Grid>
              <Grid item lg>
                <List>
                  {
                    footer.map((item, index) => (
                      <ListItem disablePadding key={index} sx={{ display: "flex" }}>
                        <Typography variant="p" sx={{ color: "#7d7d7d", fontSize: "13px", flexWrap: "wrap" }}>
                          {item}
                        </Typography>
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
            </Grid>

          </Grid>

        </Grid>
        <Grid item lg />
      </Grid>
    </div>
  );
}

export default App;
