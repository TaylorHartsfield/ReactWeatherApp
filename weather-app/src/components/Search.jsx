export default function Search({handleKeyPress, handleOnChange}){

    return (
        <div className='search-box'>
            <input type="text" className="search-bar" placeholder="Search..." onChange={handleOnChange} onKeyPress={handleKeyPress}></input>
        </div>
    )
}
