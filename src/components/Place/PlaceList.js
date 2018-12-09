import React,{Component} from 'react';
import Place from './Place'
import { Link} from 'react-router-dom';
import Pagination from "react-paginating"


class PlaceList extends Component{
	constructor(props){
		super(props)
		this.state={
			currentPage: 1
		}
	}

	handlePageChange = (page) =>{
		this.setState({currentPage: page})
	}

componentDidUpdate(nextProps) {
    if (nextProps !== this.props)  this.setState({ currentPage: 1 });
  }

	render(){
		const places = this.props.places;
		const {currentPage} = this.state;
		const limit = 5;
		const pageCount = 5;
		const total = Math.ceil((places.length * limit) / pageCount);
		const offset = (currentPage - 1) * pageCount;
		console.log(offset)
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
	                  onPageChange: this.handlePageChange
	                })}
	              >
	                first
	              </button>

	              {hasPreviousPage && (
	                <button
	                  {...getPageItemProps({
	                    pageValue: previousPage,
	                    onPageChange: this.handlePageChange
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
	                      onPageChange: this.handlePageChange
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
	                    onPageChange: this.handlePageChange
	                  })}
	                >
	                  {">"}
	                </button>
	              )}

	              <button
	                {...getPageItemProps({
	                  pageValue: totalPages,
	                  onPageChange: this.handlePageChange
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
}
export default PlaceList;