import time
import unittest

from selenium.webdriver.common.keys import Keys

from driver_management import get_driver, take_screenshot


class SeleniumDemo(unittest.TestCase):
    def setUp(self) -> None:
        # self.driver = get_driver('firefox')
        self.driver = get_driver('chrome')
        self.driver.maximize_window()


    #CURRICULUM
    def test_curriculum_home_to_curriculum_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_datos_personales = self.driver.find_element_by_id("btn-curriculum")
        btn_datos_personales.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterCurriculumTitle")
        self.assertEqual('Datos Personales', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_experience_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_experience = self.driver.find_element_by_id("btn-curriculum-experience")
        btn_curriculum_experience.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterExperienceTitle")
        self.assertEqual('Experiencia Laboral', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_abilities_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_abilities = self.driver.find_element_by_id("btn-curriculum-abilities")
        btn_curriculum_abilities.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterAbilitiesTitle")
        self.assertEqual('Habilidades', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_information_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_information = self.driver.find_element_by_id("btn-curriculum-information")
        btn_curriculum_information.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterInformationTitle")
        self.assertEqual('Información adicional', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_references_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_references = self.driver.find_element_by_id("btn-curriculum-references")
        btn_curriculum_references.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterReferenceTitle")
        self.assertEqual('Referencias', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_studies_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_studies = self.driver.find_element_by_id("btn-curriculum-studies")
        btn_curriculum_studies.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterStudiesTitle")
        self.assertEqual('Educación', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_idom_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_idom = self.driver.find_element_by_id("btn-curriculum-idom")
        btn_curriculum_idom.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterIdomTitle")
        self.assertEqual('Idiomas', titulo_nueva_pagina.text)

    def test_curriculum_home_to_curriculum_general_form(self):
        self.driver.get('http://localhost:3000/curriculum/home')
        btn_curriculum_general = self.driver.find_element_by_id("btn-curriculum-general")
        btn_curriculum_general.click()
        time.sleep(1)
        titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterGeneralTitle")
        self.assertEqual('Información general', titulo_nueva_pagina.text)

    def test_register_curriculum(self):
            self.driver.get('http://localhost:3000/curriculum/1/')
            input_name = self.driver.find_element_by_name("input-name")
            input_lastname = self.driver.find_element_by_name("input-lastname")
            input_cellphone = self.driver.find_element_by_name("input-cellphone")
            input_phone = self.driver.find_element_by_name("input-phone")
            input_nationality = self.driver.find_element_by_name("input-nationality")
            input_typeDocument= self.driver.find_element_by_name("input-typeDocumentId")
            input_documentNumber = self.driver.find_element_by_name("input-documentNumber")
            input_birthday = self.driver.find_element_by_name("input-birthday")
            input_gender = self.driver.find_element_by_name("input-genderId")
            input_maritalStatus = self.driver.find_element_by_name("input-maritalStatusId")
            btn_save = self.driver.find_element_by_id('btn-save')
            input_name.send_keys('Juan')
            input_lastname.send_keys('Perez')
            input_cellphone.send_keys(79855555)
            input_phone.send_keys(3335690)
            input_nationality.send_keys("Boliviana")
            input_typeDocument.send_keys("Cedula de Identidad")
            input_documentNumber.send_keys(58656566)
            input_birthday.send_keys("20-10-2001")
            input_gender.send_keys("Masculino")
            input_maritalStatus.send_keys("Viudo")
            btn_save.submit()
            time.sleep(4)
            titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterExperienceTitle")
            self.assertEqual('Experiencia Laboral', titulo_nueva_pagina.text)

    def test_register_curriculum_experience(self):
            self.driver.get('http://localhost:3000/curriculum/2/')
            input_position = self.driver.find_element_by_name("input-position")
            input_company = self.driver.find_element_by_name("input-company")
            input_areaWorkId = self.driver.find_element_by_name("input-areaWorkId")
            input_countryId = self.driver.find_element_by_name("input-countryId")
            input_ubication = self.driver.find_element_by_name("input-ubication")
            input_dateInit = self.driver.find_element_by_name("input-dateInit")
            input_dateFinish = self.driver.find_element_by_name("input-dateFinish")
            input_dependents = self.driver.find_element_by_name("input-dependents")
            input_experienceYears = self.driver.find_element_by_name("input-experienceYears")
            input_description = self.driver.find_element_by_name("input-description")
            btn_save = self.driver.find_element_by_id('btn-save')
            input_position.send_keys('Contador')
            input_company.send_keys('Multicenter')
            input_areaWorkId.send_keys('Finanzas o contabilidad')
            input_countryId.send_keys('Bolivia')
            input_ubication.send_keys('Santa Cruz de la Sierra')
            input_dateInit.send_keys('03-02-2015')
            input_dateFinish.send_keys('02-03-2018')
            input_dependents.send_keys(4)
            input_experienceYears.send_keys(2)
            input_description.send_keys('Making this the first true generator on the Internet. It uses atructures, to generate Lorem Ipsum which looks reasonable.')

            btn_save.submit()
            time.sleep(6)
            titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterAbilitiesTitle")
            self.assertEqual('Habilidades', titulo_nueva_pagina.text)

    def test_register_curriculum_abilities(self):
            self.driver.get('http://localhost:3000/curriculum/3/')
            input_ability = self.driver.find_element_by_name("input-ability")
            input_experienceYears = self.driver.find_element_by_name("input-experienceYears")

            btn_save = self.driver.find_element_by_id('btn-save')
            input_ability.send_keys('Power Bi')
            input_experienceYears.send_keys(2)

            btn_save.submit()
            time.sleep(4)
            titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterGeneralTitle")
            self.assertEqual('Información general', titulo_nueva_pagina.text)

    def test_register_curriculum_general(self):
            self.driver.get('http://localhost:3000/curriculum/4/')
            input_title = self.driver.find_element_by_name("input-title")
            input_categoryId = self.driver.find_element_by_name("input-categoryId")
            input_contractTypeId = self.driver.find_element_by_name("input-contractTypeId")
            input_salary = self.driver.find_element_by_name("input-salary")
            input_countryReferenceId = self.driver.find_element_by_name("input-countryReferenceId")
            input_presentation = self.driver.find_element_by_name("input-presentation")

            btn_save = self.driver.find_element_by_id('btn-save')
            input_title.send_keys('Ing. Industrial')
            input_categoryId.send_keys(' Agricultura y campo')
            input_contractTypeId.send_keys('Tiempo completo')
            input_salary.send_keys(3500)
            input_countryReferenceId.send_keys('Bolivia')
            input_presentation.send_keys('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')


            btn_save.submit()
            time.sleep(4)
            titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterReferenceTitle")
            self.assertEqual('Referencias', titulo_nueva_pagina.text)

    def test_register_curriculum_reference(self):
            self.driver.get('http://localhost:3000/curriculum/5/')
            input_name = self.driver.find_element_by_name("input-name")
            input_company = self.driver.find_element_by_name("input-company")
            input_cellphone = self.driver.find_element_by_name("input-cellphone")

            btn_save = self.driver.find_element_by_id('btn-save')
            input_name.send_keys('Lic. Pepe Lopez')
            input_company.send_keys('Tero tero')
            input_cellphone.send_keys("765656565")


            btn_save.submit()
            time.sleep(4)
            titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterStudiesTitle")
            self.assertEqual('Educación', titulo_nueva_pagina.text)

    def test_register_curriculum_studies(self):
            self.driver.get('http://localhost:3000/curriculum/6/')
            input_school = self.driver.find_element_by_name("input-school")
            input_init = self.driver.find_element_by_name("input-init")
            input_finish = self.driver.find_element_by_name("input-finish")
            input_levelStudyIdSchool = self.driver.find_element_by_name("input-levelStudyIdSchool")
            input_countryIdSchool = self.driver.find_element_by_name("input-countryIdSchool")
            input_university = self.driver.find_element_by_name("input-university")
            input_semester = self.driver.find_element_by_name("input-semester")
            input_levelStudyIdUniversity = self.driver.find_element_by_name("input-levelStudyIdUniversity")
            input_countryIdUniversity = self.driver.find_element_by_name("input-countryIdUniversity")

            btn_save = self.driver.find_element_by_id('btn-save')

            input_school.send_keys('La Salle')
            input_levelStudyIdSchool.send_keys('Otros')
            input_countryIdSchool.send_keys('Bolivia')
            input_init.send_keys('02-02-2006')
            input_finish.send_keys('22-11-2015')
            input_university.send_keys('UAGRM')
            input_semester.send_keys('Octavo')
            input_levelStudyIdUniversity.send_keys('Universidad')
            input_countryIdUniversity.send_keys('Bolivia')

            btn_save.submit()
            time.sleep(7)
            titulo_nueva_pagina = self.driver.find_element_by_id("PageRegisterIdomTitle")
            self.assertEqual('Idiomas', titulo_nueva_pagina.text)