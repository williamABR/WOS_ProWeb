package co.edu.javeriana.myapp.server.myappserver.model;
 
import java.util.List;
 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
 
@Entity
public class Producto {
    private String nombre;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String codigo;
    private String medida;
    private Integer precio;
    private String url;

    public Producto(String nom,String cod,String med,Integer pre) {
        this.nombre = nom;
        this.codigo = cod;
        this.medida = med;
        this.precio = pre;
    }
   
    @OneToMany(mappedBy="producto")
    private List<Lote> productos;
 
    public String getName() {
        return nombre;
    }
    public void setName(String nombre) {
        this.nombre = nombre;
    }
    public String getCode() {
        return codigo;
    }
    public void setCode(String codigo) {
        this.codigo = codigo;
    }
    public String getMesure() {
        return medida;
    }
    public void setMesure(String medida) {
        this.medida = medida;
    }
}