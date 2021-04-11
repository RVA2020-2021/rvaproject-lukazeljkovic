package rva.ctrls;

import java.util.Collection;

import javax.transaction.Transactional;

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
import rva.jpa.Nacionalnost;
import rva.repository.NacionalnostRepository;

@CrossOrigin
@RestController
@Api(tags = {"Nacionalnost CRUD operacije"})
public class NacionalnostResController {
	
	@Autowired
	private NacionalnostRepository nacionalnostRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("nacionalnost")
	@ApiOperation(value = "Vraca kolekciju svih nacionalnosti iz baze podataka")
	public Collection<Nacionalnost> getNacionalnosti()
	{
		return nacionalnostRepository.findAll();
	}

	@GetMapping("nacionalnost/{id}")
	@ApiOperation(value = "Vraca nacionalnost u odnosu na prosledjenu vrednost path varijable id")
	public Nacionalnost getNacionalnost(@PathVariable("id") Integer id)
	{
		return nacionalnostRepository.getOne(id);
	}
	
	@GetMapping("nacionalnostNaziv/{naziv}")
	@ApiOperation(value = "Vraca kolekciju svih nacionalnosti iz baze podataka koji sadrzi vrednost prosledjenu u okviru path varijable naziv")
	public Collection<Nacionalnost> getNacionalnostByNaziv(@PathVariable("naziv") String naziv)
	{
		return nacionalnostRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("nacionalnost")
	@ApiOperation(value = "Dodaje novu nacionalnost u bazu podataka")
	public ResponseEntity<Nacionalnost> insertNacionalnost(@RequestBody Nacionalnost nacionalnost)
	{
		if(!nacionalnostRepository.existsById(nacionalnost.getId()))
		{
			nacionalnostRepository.save(nacionalnost);
			return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Nacionalnost>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("nacionalnost")
	@ApiOperation(value = "Update-uje postojecu nacionalnost")
	public ResponseEntity<Nacionalnost> updateNacionalnost(@RequestBody Nacionalnost nacionalnost)
	{
		if(!nacionalnostRepository.existsById(nacionalnost.getId()))
		{
			return new ResponseEntity<Nacionalnost>(HttpStatus.NO_CONTENT);
		}
		nacionalnostRepository.save(nacionalnost);
		return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
	}
	
	//@Transactional
	@DeleteMapping("nacionalnost/{id}")
	@ApiOperation(value = "Brise nacionalnost u odnosu na vrednost prosledjene path variable id ")
	public ResponseEntity<Nacionalnost> deleteNacionalnost(@PathVariable Integer id)
	{
		if(!nacionalnostRepository.existsById(id))
		{
			return new ResponseEntity<Nacionalnost>(HttpStatus.NO_CONTENT);
		}
		
		jdbcTemplate.execute("DELETE FROM igrac WHERE nacionalnost = " + id);
		nacionalnostRepository.deleteById(id);
		if(id == -100)
		jdbcTemplate.execute("INSERT INTO \"nacionalnost\" (\"id\",\"naziv\",\"skracenica\")"
				+ "VALUES (-100,'Naziv Test','skr')");
		return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
	}
	
}
