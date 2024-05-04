function fetchStockData() {
    const stockSymbol = document.getElementById('stockSymbol').value.trim().toUpperCase();
    
    if (!stockSymbol) {
        alert("Please enter a stock symbol.");
        return;
    }

    // Simulate fetching data and analyzing
    setTimeout(() => {
        const analysisResult = analyzeStock(stockSymbol);
        document.getElementById('result').innerText = analysisResult;
    }, 1000);
}

function analyzeStock(symbol) {
    // Mock analysis result
    const mockResults = {
        'BUY': 'Strong Buy',
        'HOLD': 'Hold',
        'SELL': 'Sell'
    };
    const randomChoice = Math.random();
    if (randomChoice < 0.33) {
        return `${symbol}: ${mockResults.BUY}`;
    } else if (randomChoice < 0.66) {
        return `${symbol}: ${mockResults.HOLD}`;
    } else {
        return `${symbol}: ${mockResults.SELL}`;
    }
}