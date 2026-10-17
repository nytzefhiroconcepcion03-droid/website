function getSum() {
    const fNum = parseInt(document.getElementById("txtFirst").value, 10);
    const sNum = parseInt(document.getElementById("txtSecond").value, 10);
    const result = fNum + sNum;
    document.getElementById("txtResults").value = isNaN(result) ? "" : result;
}
document.getElementById("btnCompute").addEventListener("click", getSum);