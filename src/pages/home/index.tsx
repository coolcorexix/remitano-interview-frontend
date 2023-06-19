import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactJsPagination from 'react-js-pagination';

import Video from '../../components/Video'
import { useStores } from '../../stores';
import { Loading } from '../../components/Loading';

const Home = observer(function Home() {
  const { videoStore } = useStores();
  const { videoList, isLoading } = videoStore;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() =>{
    videoStore.fetchVideoList({
      page: currentPage - 1,
      page_size: itemsPerPage
    });
  }, [videoStore, currentPage]);

  return (
    <div>
      {isLoading ? <Loading /> : (
        <div style={{marginTop: "20px"}}>
          {
            videoList.length > 0 ? (
              <>
                {videoList.map((video) => (
                  <Video data={video} key={video.id}/>
                  ))}
                <ReactJsPagination
                  activePage={currentPage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={totalItems}
                  onChange={handlePageChange}
                />
              </>
                ) : <span>No Result</span>
              }
        </div>
      )}
    </div>
  );
});

export default Home;