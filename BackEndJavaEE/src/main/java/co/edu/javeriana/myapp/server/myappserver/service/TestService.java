package co.edu.javeriana.myapp.server.myappserver.service;
import java.util.List;
import co.edu.javeriana.myapp.server.myappserver.model.Producto;
import co.edu.javeriana.myapp.server.myappserver.model.ProductoRepository;
import co.edu.javeriana.myapp.server.myappserver.model.User;
import co.edu.javeriana.myapp.server.myappserver.model.Usuario;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;


@RestController()
@RequestMapping("/api")
public class TestService {

    @Autowired
	private ProductoRepository repository;

	@RequestMapping(value = "/test", produces = "application/json")
	public String test() {
        return "admin";
	}
    
    @PreAuthorize("hasRole('ROLE_ADMIN')") // TODO ver http://www.baeldung.com/spring-security-expressions-basic
	@RequestMapping(value = "/restricted-method", produces = "application/json")
    public String restrictedMethod() {
        return "{\"value\": \"ok admin\"}";
    }

    @RequestMapping(value = "/current-user", method = RequestMethod.GET, produces="application/json")
    @ResponseBody
    public User currentUserName(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return user;
    }

    @RequestMapping(value = "/productos", produces = "application/json")
	public String all() throws ParseException {
        //return repository.findAll();
        Usuario usuarioAux = new Usuario();
        usuarioAux.setPassword("Medez");
        usuarioAux.setRol("BODEGUERO");
        //return usuarioAux.getNombre();
        //JSONParser parser = new JSONParser();
        //JSONObject jsonObj = (JSONObject) parser.parse(usuarioAux.getNombre());
        //return jsonObj;
        //return( usuarioAux.getNombre().toJson());
        return "{\"value\": \"ok product\"}";
    }

    @RequestMapping(value = "/role", produces="application/json")
    @ResponseBody
    public User currentRole(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return user;
    }
    
    
}