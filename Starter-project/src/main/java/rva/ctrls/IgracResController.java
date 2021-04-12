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
import rva.repository.IgracRepository;

@CrossOrigin
@RestController
@Api(tags = {"Igrac CRUD operacije"})
public class IgracResController {
	
	@Autowired
	private IgracRepository igracRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("igrac")
	@ApiOperation(value = "Vraca kolekciju svih igraca iz baze podataka")
	public Collection<Igrac> getIgraci()
	{
		return igracRepository.findAll();
	}
	
	@GetMapping("igrac/{id}")
	@ApiOperation(value = "Vraca igraca u odnosu na prosledjenu vrednost path varijable id")
	public Igrac getIgrac(@PathVariable("id") Integer id)
	{
		return igracRepository.getOne(id);
	}
	
	@GetMapping("igracIme/{ime}")
	@ApiOperation(value = "Vraca kolekciju svih igraca iz baze podataka koji sadrzi vrednost prosledjenu u okviru path varijable naziv")
	public Collection<Igrac> getIgracByNaziv(@PathVariable("ime") String ime)
	{
		return igracRepository.findByImeContainingIgnoreCase(ime);
	}
	
	@PostMapping("igrac")
	@ApiOperation(value = "Dodaje novog igraca u bazu podataka")
	public ResponseEntity<Igrac> insertIgrac(@RequestBody Igrac igrac) {
		if(!igracRepository.existsById(igrac.getId()))
		{
			igracRepository.save(igrac);
			return new ResponseEntity<Igrac>(HttpStatus.OK);
		}
			return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("igrac")
	@ApiOperation(value = "Update-uje postojeceg igraca")
	public ResponseEntity<Igrac> updateIgrac(@RequestBody Igrac igrac)
	{
		if(!igracRepository.existsById(igrac.getId()))
		{
			return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
		}
		igracRepository.save(igrac);
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}
	//test1

	
	@DeleteMapping("igrac/{id}")
	@ApiOperation(value = "Brise igraca u odnosu na vrednost prosledjene path variable id ")
	public ResponseEntity<Igrac> deleteIgrac(@PathVariable Integer id) 
	{
		if(!igracRepository.existsById(id))
		{
			return new ResponseEntity<Igrac>(HttpStatus.NO_CONTENT);
		}
		igracRepository.deleteById(id);
		if(id == -100)
		{
			jdbcTemplate.execute("INSERT INTO \"igrac\" (\"id\",\"ime\",\"prezime\",\"broj_reg\",\"datum_rodjenja\",\"nacionalnost\",\"tim\")"
					+ "VALUES(-100,'Ime test', 'Prezime test', '1782',to_date('23.10.1987.','dd.mm.yyyy.'), 1, 1) ");
		}
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}

}
