package co.edu.javeriana.myapp.server.myappserver.model;
 
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author oscar
 */
@Entity
public class Lote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idItem;

    @Basic
    private int cantidad;

    @Basic
    private float valor;

    @Basic
    private long codigoSKU;

    @Basic
    private int stock;

    @OneToOne(targetEntity = Producto.class)
    private Producto producto;

    public Long getIdItem() {
        return this.idItem;
    }

    public void setIdItem(Long idItem) {
        this.idItem = idItem;
    }

    public int getCantidad() {
        return this.cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public float getValor() {
        return this.valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public long getCodigoSKU() {
        return this.codigoSKU;
    }

    public void setCodigoSKU(long codigoSKU) {
        this.codigoSKU = codigoSKU;
    }

    public int getStock() {
        return this.stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public Producto getProducto() {
        return this.producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

}