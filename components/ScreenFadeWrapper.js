const ScreenFadeWrapper = ({visible, other, component}) => {
    return(
        <div className={`absolute top-0 left-0 duration-700 h-screen overflow-scroll w-screen ${visible?"visible opacity-100 delay-700":"invisible opacity-0"} ${other}`}>
            {component}
        </div>        
    )
}

export default ScreenFadeWrapper
