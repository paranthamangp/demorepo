public class Bike{                                      
    Private String modelNumber;              
    Private Integer numberInStock;

    public void updateStock(Integer justSold) {
        numberInStock = numberInStock - justSold;
            }
}