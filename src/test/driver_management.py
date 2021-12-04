from selenium import webdriver
from datetime import datetime


def get_driver(browser):
    driver = None
    if browser == 'chrome':
        driver = webdriver.Chrome(executable_path='drivers/chromedriver.exe')
    if browser == "firefox":
        driver = webdriver.Firefox(executable_path='drivers/geckodriver.exe')
    if browser == 'edge':
        driver = webdriver.Edge(executable_path='')
    return driver

def take_screenshot(driver, name):
    driver.maximize_window()
    now = datetime.now().strftime('%Y-%m-%d %H-%M-%S')
    driver.get_screenshot_as_file('screenshots/1200_700_%s_%s.png' % (name, now))
    driver.set_window_size(900, 768)
    driver.implicitly_wait(10)
    driver.get_screenshot_as_file('screenshots/1024_768_%s_%s.png' % (name, now))
    driver.set_window_size(200, 800)
    driver.implicitly_wait(10)
    driver.get_screenshot_as_file('screenshots/320_568_%s_%s.png' % (name, now))

