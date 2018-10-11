package co.edu.javeriana.myapp.server.myappserver.model;
 
import java.sql.Date;
 
import javax.persistence.ManyToOne;
 
public class Lote{
    @ManyToOne 
    private String codigoSKU;
    private Producto producto;
    private int precio;
    private int stock;
    private Date expFecha;
   
   
   
    public int getPrice() {
        return precio;
    }
    public void setPrice(int precio) {
        this.precio = precio;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
   
   
 
}