package rva.ctrls;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldRestController {

	@RequestMapping("/")
	public String helloWorld()
	{
		return "Hello wolrd";
	}
}
