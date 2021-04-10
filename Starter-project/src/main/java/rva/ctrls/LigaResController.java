package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import rva.jpa.Liga;
import rva.repository.LigaRepository;


public class LigaResController {

	
	@Autowired
	private LigaRepository ligaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("liga")
	public Collection<Liga> getLiga()
	{
		return ligaRepository.findAll();
	}
	
	@GetMapping("liga/{id}")
	public Liga getLiga(@PathVariable("id") Integer id)
	{
		return ligaRepository.getOne(id);
	}
	
}
