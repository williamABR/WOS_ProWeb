package co.edu.javeriana.myapp.server.myappserver.model;
 
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
 
@Entity
public class Lote{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String codigoSKU;
    @ManyToOne 
    private Producto producto;
    private int stock;
    private Date expFecha;
   
   
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
   
   
 
}