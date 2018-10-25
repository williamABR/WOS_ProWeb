package co.edu.javeriana.myapp.server.myappserver.service;
import java.util.List;
import co.edu.javeriana.myapp.server.myappserver.model.Producto;
import co.edu.javeriana.myapp.server.myappserver.model.ProductoRepository;
import co.edu.javeriana.myapp.server.myappserver.model.User;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@RestController()
@RequestMapping("/api")
public class TestService {

    private final ProductoRepository repository;

    TestService(ProductoRepository repository) {
		this.repository = repository;
	}

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
    @GetMapping("/productos")
	List<Producto> all() {
		return repository.findAll();
    }
    
    @PostMapping("/employees")
	Producto newEmployee(@RequestBody Producto newEmployee) {
		return repository.save(newEmployee);
	}
	
}
