package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Igrac;
import rva.jpa.Tim;
import rva.repository.IgracRepository;
import rva.repository.TimRepository;

@CrossOrigin
@RestController
@Api(tags = {"Tim CRUD operacije"})
public class TimResController {
	
	@Autowired
	private TimRepository timRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("tim")
	@ApiOperation(value = "Vraca kolekciju svih timova iz baze podataka")
	public Collection<Tim> getTimovi()
	{
		return timRepository.findAll();
	}
	
	@GetMapping("tim/{id}")
	@ApiOperation(value = "Vraca tim u odnosu na prosledjenu vrednost path varijable id")
	public Tim getTim(@PathVariable("id") Integer id)
	{
		return timRepository.getOne(id);
	}
	
	@GetMapping("timNaziv/{naziv}")
	@ApiOperation(value = "Vraca kolekciju svih timova iz baze podataka koji sadrzi vrednost prosledjenu u okviru path varijable naziv")
	public Collection<Tim> getTimByNaziv(@PathVariable("naziv") String naziv)
	{
		return timRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("tim")
	@ApiOperation(value = "Dodaje novi tim u bazu podataka")
	public ResponseEntity<Tim> insertTim(@RequestBody Tim tim) {
		if(!timRepository.existsById(tim.getId()))
		{
			timRepository.save(tim);
			return new ResponseEntity<Tim>(HttpStatus.OK);
		}
			return new ResponseEntity<Tim>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("tim")
	@ApiOperation(value = "Update-uje postojeci tim")
	public ResponseEntity<Tim> updateTim(@RequestBody Tim tim)
	{
		if(!timRepository.existsById(tim.getId()))
		{
			return new ResponseEntity<Tim>(HttpStatus.CONFLICT);
		}
		timRepository.save(tim);
		return new ResponseEntity<Tim>(HttpStatus.OK);
	}
	
	@DeleteMapping("tim/{id}")
	@ApiOperation(value = "Brise tim u odnosu na vrednost prosledjene path variable id ")
	public ResponseEntity<Tim> deleteTim(@PathVariable Integer id) 
	{
		if(!timRepository.existsById(id))
		{
			return new ResponseEntity<Tim>(HttpStatus.NO_CONTENT);
		}
		jdbcTemplate.execute("DELETE FROM igrac WHERE tim = " + id);
		timRepository.deleteById(id);
		if(id == -100)
		{
			jdbcTemplate.execute("INSERT INTO \"tim\" (\"id\",\"naziv\",\"osnovan\",\"sediste\",\"liga\")"
					+ "VALUES(-100,'Naziv test', to_date('23.10.1987.','dd.mm.yyyy.'), 'Test sediste', 1) ");
		}
		return new ResponseEntity<Tim>(HttpStatus.OK);
	}
	

}
