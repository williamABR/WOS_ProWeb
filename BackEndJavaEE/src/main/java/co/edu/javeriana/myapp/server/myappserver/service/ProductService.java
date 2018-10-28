package co.edu.javeriana.myapp.server.myappserver.service;

import java.io.Console;
import java.util.Optional;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Producto;
import co.edu.javeriana.myapp.server.myappserver.model.ProductoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductService {

	@Autowired
	private ProductoRepository repository;

    //@PreAuthorize("hasRole('ROLE_ADMIN')")
	@RequestMapping("/productos")
	Iterable<Producto> findAll() {
		return repository.findAll();
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/productos/{id}")
	Optional<Producto> find(@PathVariable("id") Long id) {
		return repository.findById(id);
    }
    
    @RequestMapping("/new_prod")
	Producto createProducto(@RequestParam(value = "product") String productoJSON) {		
        System.out.println("Llegó");
        ObjectMapper mapper = new ObjectMapper();
        try {
            Producto producto = mapper.readValue(productoJSON, Producto.class);
            //if(!repository.existsById(producto.getIdProducto())) {
            	return repository.save(producto);
            //}
            
        } catch (Exception e) {
        	System.err.println(e.toString());
        }
        
		return null;
	}
}
