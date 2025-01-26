
export default async function Items(items){
    const res = await fetch ("http://localhost:4000/items", { cache: "no-store" });        // Ensure no caching
    const fetchedItems = await res.json();    
                                                     // Parse the JSON response
    return(
        <div className = "p-8">
            <h1 className = "text-2xl font-bold">Explore Shared Items</h1>
            <p>Here tou will find a list of all shared items.</p>
            <ul className = "list-disc list-inside mt-4">
                {fetchedItems.map((item) => (
                    <li key = {item._ID} className = "mb - 2">
                        <Span className = "font - semibold">{item.name}</Span>: {item. description}
                        
                    </li>

                )
            )}
            </ul>

        </div>
    );
}