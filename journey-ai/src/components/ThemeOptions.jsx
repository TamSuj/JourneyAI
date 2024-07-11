function ThemeOption() {
    return (
        <div id="theme-options">
            <input type="checkbox" name="Adventure" value="adventure" />
            <label htmlFor="Adventure">Adventure Travel</label><br />
            
            <input type="checkbox" name="Cultural" value="cultural" />
            <label htmlFor="Cultural">Cultural Travel</label><br />
            
            <input type="checkbox" name="Beach" value="beach" />
            <label htmlFor="Beach">Beach and Coastal Travel</label><br />
            
            <input type="checkbox" name="City" value="city" />
            <label htmlFor="City">City Travel</label><br />
            
            <input type="checkbox" name="Nature" value="nature" />
            <label htmlFor="Nature">Nature and Wildlife Travel</label><br />
        </div>
    );
}

export default ThemeOption;