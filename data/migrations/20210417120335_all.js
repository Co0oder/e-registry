exports.up = (knex) => {
    return knex.schema
      .createTable('locations', table => {
          table.float('longitude').notNullable();
          table.float('latitude').notNullable();
          table.string('city_name').notNullable();
          table.string('address').notNullable();
          table.primary(['longitude','latitude'],'pk_location');
          table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
      })
      .then(() => {
          return knex.schema
            .createTable('hospitals', table => {
                table.string('hospital_name').notNullable();
                table.string('hospital_phone').notNullable();
                table.string('hospital_domain').notNullable();

                //foreign key fro locations
                table.float('longitude').notNullable();
                table.float('latitude').notNullable();
                table.foreign(['longitude','latitude']).references(['longitude','latitude']).on('locations');

                // locations primary key
                table.primary(['hospital_name','hospital_phone'],'pk_hospital');
            })
      })
      .then(() => {
        return knex.schema
        .createTable('doctors', table => {
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_phone').notNullable();
            table.string('doctors_domain').notNullable();
            table.int('doctors_experience').notNullable();
            table.string('doctors_birth_date').notNullable();
            
            // link to 'department_name'
            table.string('department_name').notNullable();
            
            //link to office
            table.integer('office_number').notNullable();

            // doctors primary key
            table.primary(['doctors_name','doctors_sure_name','doctors_domain'],'pk_doctor');
        })
      })
      .then(() => {
        return knex.schema
        .createTable('departments', table => {
            table.string('department_name').notNullable();
            table.string('department_domain').notNullable();

            //foreign key to doctors
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_domain').notNullable();
            table.foreign(['doctors_name','doctors_sure_name','doctors_domain'])
                .references(['doctors_name','doctors_sure_name','doctors_domain'])
                .on('doctors');

            // foreign key to hospitals
            table.string('hospital_name').notNullable();
            table.string('hospital_phone').notNullable();
            table.foreign(['hospital_name','hospital_phone'])
                .references(['hospital_name','hospital_phone'])
                .on('hospitals');
            table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());

            table.primary(
                ['doctors_domain','doctors_name','department_name','doctors_sure_name'],
                'pk_hospital'
            );
        })
      })

      .then(() => {
        return knex.schema
        .createTable('staff_members ', table => {
            table.string('staff_member_name').notNullable();
            table.string('staff_member_sure_name').notNullable();
            table.string('staff_member_phone').notNullable();
            table.string('staff_member_position').notNullable();
            table.integer('staff_member_experience').notNullable();
            table.string('staff_member_birth_date').notNullable();
            
            // foreign key to department
            table.string('department_name').notNullable();
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_domain').notNullable();
            table.foreign(['doctors_name','doctors_sure_name','doctors_domain'])
            .references(['doctors_name','doctors_sure_name','doctors_domain'])
            .on('departments');

            // staff_member primary key
            table.primary(
                ['staff_member_name','staff_member_sure_name','staff_member_position'],
                'pk_staff_members'
            );
        })
      })
      .then(() => {
        return knex.schema
        .createTable('patients', table => {
            table.string('patient_name').notNullable();
            table.string('patient_sure_name').notNullable();
            table.string('patient_phone').notNullable();
            table.string('patient_birth_date').notNullable();
            table.string('patient_street').notNullable();
            table.integer('patient_house_number').notNullable();
            
            // foreign key to doctor
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_domain').notNullable();
            table.foreign(['doctors_domain','doctors_name','doctors_sure_name'])
                .references(['doctors_domain','doctors_name','doctors_sure_name'])
                .on('doctors');

            // patients primary key
            table.primary(
                ['patient_name','patient_sure_name','patient_phone'],
                'pk_patient'
            );
        })
      })
      .then(() => {
        return knex.schema
        .createTable('chambers', table => {
            table.integer('chamber_number').notNullable();
            table.string('chamber_appointment').notNullable();
            table.integer('beds_number').notNullable();
            
            // foreign key to department
            table.string('department_name').notNullable();
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_domain').notNullable();
            table.foreign(['doctors_name','doctors_sure_name','doctors_domain'])
                .references(['doctors_name','doctors_sure_name','doctors_domain'])
                .on('departments');

            // chamber primary key
            table.primary(
                ['chamber_number','chamber_appointment'],
                'pk_patient'
            );
        })
      })
      .then(() => {
        return knex.schema
        .createTable('in_patients', table => {
            table.string('in_patient_name').notNullable();
            table.string('in_patient_sure_name').notNullable();
            table.string('in_patient_phone').notNullable();
            table.string('in_patient_birth_date').notNullable();
            table.string('in_patient_street').notNullable();
            table.integer('in_patient_house_number').notNullable();
            
            // foreign key to doctor
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_domain').notNullable();
            table.foreign(['doctors_domain','doctors_name','doctors_sure_name'])
                .references(['doctors_domain','doctors_name','doctors_sure_name'])
                .on('doctors');
            
            // foreign key to chamber
            table.integer('chamber_number').notNullable();
            table.string('chamber_appointment').notNullable();
            table.foreign(['chamber_number','chamber_appointment'])
                .references(['chamber_number','chamber_appointment'])
                .on('chambers');

            // in_patient primary key
            table.primary(
                ['in_patient_name','in_patient_sure_name','in_patient_phone'],
                'pk_in_patient'
            );
        })
      })
      .then(() => {
        return knex.schema
        .createTable('offices', table => {
            table.integer('office_number').notNullable();
            
            // foreign key to doctors
            table.string('doctors_name').notNullable();
            table.string('doctors_sure_name').notNullable();
            table.string('doctors_domain').notNullable();
            table.foreign(['doctors_domain','doctors_name','doctors_sure_name'])
                .references(['doctors_domain','doctors_name','doctors_sure_name'])
                .on('doctors');

            // office primary key
            table.primary(
                ['office_number'],
                'pk_offices'
            );
        })
      })
  };

  exports.down = (knex) => {
    return knex.schema.dropTable('hospitals')
        .then(() => {
            return knex.schema.dropTable('locations');
        })
        .then(() => {
            return knex.schema.dropTable('departments');
        })
        .then(() => {
            return knex.schema.dropTable('doctors');
        })
        .then(() => {
            return knex.schema.dropTable('staff_members');
        })
        .then(() => {
            return knex.schema.dropTable('patients');
        })
        .then(() => {
            return knex.schema.dropTable('chambers');
        })
        .then(() => {
            return knex.schema.dropTable('in_patients');
        })
        .then(() => {
            return knex.schema.dropTable('offices');
        });
  };