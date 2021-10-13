import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../_actions';
import moment from 'moment';
import { useParams } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
const limit = 15
const localSub = JSON.parse(localStorage.getItem('subbredit'))
function HomePage() {
  const post = useSelector(state => state.post.post);
  const sub = useSelector(state => state.post.subbredit);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const [tab, setTab] = React.useState(1);

  useEffect(() => {
    if (tab == 1) {
      dispatch(postActions.getHot(id, page, limit));
    }
    else {
      dispatch(postActions.getBest(id, page, limit));
    }
  }, [id]);
  const handleChangePage = () => {
    setPage(page + 1);
    if (tab == 1) {
      dispatch(postActions.getHot(id, page, limit));
    }
    else {
      dispatch(postActions.getBest(id, page, limit));
    }
  };
  function getHot() {
    setPage(1);
    dispatch(postActions.getHot(id, page, limit));
  };
  function getBest() {
    setPage(1);
    dispatch(postActions.getBest(id, page, limit));
  };
  return (
    <>
      <div className="video__thumb">
        <video src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" autoPlay loop muted></video>
      </div>
      <div className="tab__menu">
        <div className="container">
          {
            sub ? (
              <div className="tab__menu--info">
                <div className="menu__info--logo">
                  <img src={sub.icon_img || sub.header_img} alt="" />
                </div>
                <div className="menu__info--title">
                  <h4>{sub.title} <a href="#">join</a></h4>
                  <p>{sub.url}</p>
                </div>
              </div>
            ) : (
              <>
                {
                  localSub ? (
                    <div className="tab__menu--info">
                      <div className="menu__info--logo">
                        <img src={localSub.icon_img || localSub.header_img} alt="" />
                      </div>
                      <div className="menu__info--title">
                        <h4>{localSub.title} <a href="#">join</a></h4>
                        <p>{localSub.url}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="tab__menu--info">
                      <div className="menu__info--logo">
                        <img src={'images/dota_icon.png'} alt="" />
                      </div>
                      <div className="menu__info--title">
                        <h4>{'Dota 2 on Reddit'} <a href="#">join</a></h4>
                        <p>{'/r/DOTA2/'}</p>
                      </div>
                    </div>
                  )
                }

              </>
            )
          }
          <ul className="tab__menu--link">
            <li className="active">
              <a href="#">Post</a>
            </li>
            <li>
              <a href="#">Predictions <span>LIVE</span></a>
            </li>
            <li>
              <a href="#">New to Dota 2</a>
            </li>
            <li>
              <a href="#">Read the FAQ</a>
            </li>
            <li>
              <a href="#">Subreddit Rules</a>
            </li>
            <li>
              <a href="#">TI10 Survival Guide</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="trend__menu">
              <ul>
                <li>
                  <a href="#" className={`${tab == 1 ? 'active' : ''}`} onClick={e => {
                    e.preventDefault(),
                      setTab(1),
                      getHot()
                  }}><i className="fab fa-hotjar"></i>hot</a>
                </li>
                <li>
                  <a href="#" className={`${tab == 2 ? 'active' : ''}`} onClick={e => {
                    e.preventDefault(),
                      setTab(2),
                      getBest()
                  }}><i className="fas fa-location-arrow"></i>new</a>
                </li>
                <li>
                  <a href="#"><i className="far fa-chart-bar"></i>top</a>
                </li>
              </ul>
            </div>
            {
              post.length > 0 &&
              <>
                <InfiniteScroll
                  dataLength={post.length}
                  next={handleChangePage}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                >
                  <div className="post__list">
                    {
                      post.map((items, idx) => (
                        <a href="#" className="post__list--items" key={idx}>
                          <span className="post__items--response">
                            <span><i className="far fa-thumbs-up"></i></span>
                            <span>{items.data.ups}</span>
                            <span><i className="far fa-thumbs-down"></i></span>
                          </span>
                          <div className="post__items--info">
                            <div className="post-articel">
                              <span>Posted by</span>
                              <a href="#">{items.data.author}</a>
                              <a href="#">{moment(items.data.created_utc * 1000).fromNow()}</a>
                            </div>
                            <h4 className="post-title">{items.data.title}</h4>
                            <a href="#" className="post-tags">{items.data.link_flair_text}</a>
                            {
                              items.data.selftext &&
                              <>
                                <p className="post-des">{items.data.selftext}</p>
                              </>
                            }
                            <div className="post-action">
                              <a href="#"><i className="far fa-comment-alt"></i>{items.data.num_comments} comments</a>
                              <a href="#"><i className="fas fa-share"></i>Share</a>
                              <a href="#"><i className="fas fa-bookmark"></i>Save</a>
                            </div>
                          </div>
                        </a>
                      ))
                    }
                  </div>
                </InfiniteScroll>

                {/* <Pagination
                  activePage={page}
                  totalItemsCount={totalRecord}
                  itemsCountPerPage={limit}
                  pageRangeDisplayed={5}
                  onChange={handleChangePage}
                /> */}
              </>
            }
          </div>
          <div className="col-md-3">
            <div className="box__trend">
              <h5 className="box__trend--header">About comunity</h5>
              <div className="box__trend--body">
                <p>Dota</p>
                <div className="box__number">
                  <div className="box__number--wrap">
                    <b>993k</b>
                    <span>Members</span>
                  </div>
                  <div className="box__number--wrap">
                    <b>993k</b>
                    <span>Members</span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomePage };