from setuptools import setup, find_packages

setup(
    name='apiverve_sunrisesunset',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Sunrise Sunset calculates exact sunrise and sunset times, twilight stages, and golden hour windows for any latitude and longitude coordinates. Paid plans can specify custom dates and receive solar noon.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/sunrisesunset?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
