import React,{useState, useEffect} from 'react';
import Place from './Place'
import { Link} from 'react-router-dom';
import Pagination from "react-paginating"


function PlaceList(props){
	const [currentPage, setCurrentPage] = useState(1)

	const handlePageChange = (page) =>{
		setCurrentPage(page)
	}
	const places = props.places;

	useEffect(() =>{
		setCurrentPage(1)
	},[places])

		const limit = 5;
		const pageCount = 5;
		const total = Math.ceil((places.length * limit) / pageCount);
		const offset = (currentPage - 1) * pageCount;
		return(
			<div>
			{
				places.map((user,i) =>{
					return(
					<Link style={{
			              textDecoration: "none",
			              color: "black"
			            }} 
			        to={`/search/${user.id}`}  
			        key={i.toString()}>
						<Place
						region={places[i].region} 
						images={places[i].images}
						name={places[i].name} 
						/>
					</Link>
					);
				}).slice(offset).slice(0, pageCount)	
			}
			<Pagination 
				total={total}
				limit={limit}
		        pageCount={pageCount}
		        currentPage={currentPage}
			>
				{({
	            pages,
	            currentPage,
	            hasNextPage,
	            hasPreviousPage,
	            previousPage,
	            nextPage,
	            totalPages,
	            getPageItemProps
	          }) => (
	            <div>
	              <button
	                {...getPageItemProps({
	                  pageValue: 1,
	                  onPageChange: handlePageChange
	                })}
	              >
	                first
	              </button>

	              {hasPreviousPage && (
	                <button
	                  {...getPageItemProps({
	                    pageValue: previousPage,
	                    onPageChange: handlePageChange
	                  })}
	                >
	                  {"<"}
	                </button>
	              )}

	              {pages.map(page => {
	                let activePage = null;
	                if (currentPage === page) {
	                  activePage = { backgroundColor: "#fdce09" };
	                }
	                return (
	                  <button
	                    key={page}
	                    style={activePage}
	                    {...getPageItemProps({
	                      pageValue: page,
	                      onPageChange: handlePageChange
	                    })}
	                  >
	                    {page}
	                  </button>
	                );
	              })}

	              {hasNextPage && (
	                <button
	                  {...getPageItemProps({
	                    pageValue: nextPage,
	                    onPageChange: handlePageChange
	                  })}
	                >
	                  {">"}
	                </button>
	              )}

	              <button
	                {...getPageItemProps({
	                  pageValue: totalPages,
	                  onPageChange: handlePageChange
	                })}
	              >
	                last
	              </button>
	            </div>
	          )}
			</Pagination>
			</div>
		)
}
export default PlaceList;