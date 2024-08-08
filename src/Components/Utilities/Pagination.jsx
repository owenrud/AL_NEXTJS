const Pagination = ({page,totalPage,setPage}) =>{

    const ScrollTop = () =>{
        scrollTo({
            behavior:"smooth",
            top:0
        })
    }
    const HandleNextPage = ()=>{
        setPage((prevState)=> prevState + 1)
        ScrollTop()
    }
    const HandlePrevPage = ()=>{
        setPage((prevState)=> prevState - 1)
        ScrollTop()
    }
    const HandleLastPage = ()=>{
        setPage(totalPage)
        ScrollTop()
    }
    const HandleFirstPage = ()=>{
        setPage(1)
        ScrollTop()
    }
    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-2xl">

            {page >1 ?
            <button onClick ={HandleFirstPage} className="transition all hover:text-yellow-600">First Page</button>
            : null
            }
            
            {page >1 ?
            <button onClick ={HandlePrevPage} className="transition all hover:text-yellow-600">Prev</button>
            : null
            }
            
            
            <p>{page} of {totalPage}</p>
            
            {page != totalPage ?
            <button onClick ={HandleNextPage}  className="transition all hover:text-yellow-600">Next</button>
            : null
            }

{page != totalPage ?
            <button onClick ={HandleLastPage} className="transition all hover:text-yellow-600">Last Page</button>
            : null
            }
           
        </div>
    )
}

export default Pagination