package com.example.demo.repo;

import com.example.demo.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Integer>
{


}
