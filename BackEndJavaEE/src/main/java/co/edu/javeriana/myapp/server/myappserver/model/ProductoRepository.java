/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.myapp.server.myappserver.model;

/**
 *
 * @author williambaquero
 */
import org.springframework.data.repository.CrudRepository;


public interface ProductoRepository extends CrudRepository<Producto, Long>{
    
}
